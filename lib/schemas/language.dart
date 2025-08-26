class LanguagueData {
  final Map<String, String> _translations;
  LanguagueData({required Map<String, String> translations})
    : _translations = translations;
  Map<String, String> get translations => _translations;

  void setTranslation(String key, String value) {
    _translations[key] = value;
  }

  static LanguagueData filterLanguages(
    final List<dynamic> languages,
    String lang,
  ) {
    dynamic filtered = languages.where((language) {
      return language['code'] == lang.toLowerCase();
    }).toList();
    if (filtered.isNotEmpty) {
      final List<dynamic> languages = filtered[0]['elements'];
      Map<String, String> translations = {};
      for (var element in languages) {
        final auxElement = element.entries.first;
        translations[auxElement.key] = auxElement.value.toString();
      }
      final langData = LanguagueData(translations: translations);
      // final langData = LanguagueData(
      //   translations: Map<String, String>.from(language['elements']),
      // );
      return langData;
    }
    return LanguagueData(translations: {});
  }
}
