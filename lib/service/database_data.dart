class DatabaseData {
  String version = "";
  Map<String, CountryData> countries = {};
  Map<String, String> translations = {};
}

class CountryData {}

class CurrencyData {}

class LanguagueData {
  final String _name = "";
  final String _code = "";
  final String _flag = "";
  final String _currency = "";
  final String _currencySymbol = "";
  final String _currencyCode = "";
  Map<String, String> translations = {};
  LanguagueData({
    required String name,
    required String code,
    required String flag,
    required String currency,
    required String currencySymbol,
    required String currencyCode,
  });
  String get name => _name;
  String get code => _code;
  String get flag => _flag;
  String get currency => _currency;
  String get currencySymbol => _currencySymbol;
  String get currencyCode => _currencyCode;
}
