import os
import json
import requests

JSON_DATA_PATH:   str = "https://gist.githubusercontent.com/eastanganelli/f36853425b3b58a064d44f4920b8a588/raw/00ffdc6e157de7a9efbcf58f56243374593a2a8d/tipcalculator_tips.json"
COUNTRY_API_PATH: str = "https://restcountries.com/v3.1/name/country_name?fields=cca3,currencies,flag,flags"

def ReadAppJson() -> json:
    try:
        aux_read = requests.get(JSON_DATA_PATH)
        aux_data_json: json = aux_read.json()
    except:
        print("Error reading json path")
    else:
        return aux_data_json

def ReparseJson(json_array: any) -> any:
    new_list_json: list = []
    for json_item in json_array:
        country_information: json = GetCountryData(json_item["country"])
        for index, my_country in enumerate(country_information):
            if country_information:
                continent_name: str = json_item["continent"]
                country_name:   str = json_item["country"]
                country_code:   str = my_country["cca3"]
                currencies:    json = GetCurrencies(my_country["currencies"])
                flags:         json = GetFlags(my_country["flag"], my_country["flags"]["png"])

                if("names" in json_item):
                     country_name = json_item["names"][index]

                new_data_reparse: dict = {
                    "continent":  continent_name.capitalize(),
                    "country":    country_name.capitalize(),
                    "code":       country_code.upper(),
                    "currencies": currencies,
                    "flags":      flags
                }
                new_list_json.append(new_data_reparse)
    # print(new_list_json)
    return new_list_json

def GetCurrencies(currencies: json) -> any:
    main_key: str = list(currencies.keys())[0] if currencies else None
    if main_key:
        return {
            "name": main_key,
            "symbol": currencies[main_key]["symbol"]
        }
    return None

def GetFlags(emote_flag: str, png_flag_path: str) -> any:
    response = requests.get(png_flag_path, stream=True)
    # response.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
    filename: str = "./resources/flags/" + png_flag_path.replace("https://flagcdn.com/w320/", "")
    # check if file already exists
    if not os.path.exists("./resources/flags"):
        os.makedirs("./resources/flags")
        with open(filename, 'wb') as file:
            file.write(response.content)
    return {
        "flag":     emote_flag,
        "localpng": png_flag_path,
        "webpng":   png_flag_path
    }

# def ParseRestaurantData(data: str) -> any:
#     ...

# def ParseDriverData(data: str) -> any:
#     ...

# def ParseHotelData(data: str) -> any:
#     ...

def GetCountryData(country_name: str) -> json:
    try:
        full_api_country_path: str = COUNTRY_API_PATH.replace("country_name", country_name)
        aux_read = requests.get(full_api_country_path)
        aux_data_json: json = aux_read.json()
    except:
        print("Error reading json path")
    else:
        return aux_data_json

if __name__ == "__main__":
    print("Initialization of the script")
    json_data: json = ReadAppJson()
    json_data_parsed: json = ReparseJson(json_data["database"])
    # save json_data_parsed to file
    with open("./resources/tipcalculator_tips.json", "w") as file:
        json.dump(json_data_parsed, file, indent=4, ensure_ascii=False)
    print("Finishing the script")
    # print("JSON data saved to ./resources/tipcalculator_tips.json")