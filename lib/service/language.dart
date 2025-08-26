import 'package:language_code/language_code.dart';

class Language {
  static String getLanguageCode() {
    final languageCode = LanguageCode.rawLocale.languageCode;
    return languageCode;
  }

  static String getCountryCode() {
    final countryCode = LanguageCode.rawLocale.countryCode ?? "US";
    return countryCode;
  }
}
