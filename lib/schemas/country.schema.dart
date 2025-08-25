import 'package:tip_calculator/schemas/flag.schema.dart';
import 'package:tip_calculator/schemas/currency.schema.dart';

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
