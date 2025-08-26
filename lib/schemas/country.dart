import 'package:tip_calculator/schemas/flag.dart';
import 'package:tip_calculator/schemas/currency.dart';

class CountryData {
  final String _continent;
  final String _country;
  final String _code;
  final FlagData _flag;
  final CurrencyData _currency;
  CountryData({
    required String continent,
    required String country,
    required String code,
    required FlagData flag,
    required CurrencyData currency,
  }) : _continent = continent,
       _country = country,
       _code = code,
       _flag = flag,
       _currency = currency;
  String get continent => _continent;
  String get country => _country;
  String get code => _code;
  FlagData get flag => _flag;
  CurrencyData get currency => _currency;

  static CountryData filterCountrys(
    final List<dynamic> countries,
    String countryValue,
  ) {
    dynamic filtered = countries.where((country) {
      return country['code'] == countryValue ||
          country['country'] == countryValue;
    }).toList();
    if (filtered.isNotEmpty) {
      final country = filtered[0];
      return CountryData(
        continent: country['continent'],
        country: country['country'],
        code: country['code'],
        flag: FlagData(
          localpath: country['flags']['localpng'],
          webpng: country['flags']['webpng'],
          flag: country['flags']['flag'],
        ),
        currency: CurrencyData(
          name: country['currencies']['name'],
          symbol: country['currencies']['symbol'],
        ),
      );
    }
    return CountryData(
      continent: "",
      country: "",
      code: "",
      flag: FlagData(localpath: "", webpng: "", flag: ""),
      currency: CurrencyData(name: "\$", symbol: "\$"),
    );
  }
}
