import 'package:flutter_dotenv/flutter_dotenv.dart';
// const String databaseUsername = "eastanganelli";
// const String databaseID = "f36853425b3b58a064d44f4920b8a588";
// const String databaseDataFile =
//     "https://gist.githubusercontent.com/$databaseUsername/$databaseID/raw/";

class DatabaseData {
  String version = "";
  Map<String, CountryData> countries = {};
  Map<String, String> translations = {};
}

class CountryData {
  final String _continent = "";
  final String _country = "";
  final String _code = "";
  final FlagData _flag = FlagData(localpath: "", webpng: "", flag: "");
  final CurrencyData _currency = CurrencyData(name: "", symbol: "");
  CountryData({
    required String continent,
    required String country,
    required String code,
    required FlagData flag,
    required CurrencyData currency,
  });
  String get continent => _continent;
  String get country => _country;
  String get code => _code;
  FlagData get flag => _flag;
  CurrencyData get currency => _currency;
}

class FlagData {
  final String _localpath = "";
  final String _webpng = "";
  final String _flag = "";
  FlagData({
    required String localpath,
    required String webpng,
    required String flag,
  });
  String get name => _localpath;
  String get code => _webpng;
  String get flag => _flag;
}

class CurrencyData {
  final String _name = "";
  final String _symbol = "";
  CurrencyData({required String name, required String symbol});
  String get name => _name;
  String get symbol => _symbol;
}

class LanguagueData {
  Map<String, String> translations = {};
  LanguagueData();
}
