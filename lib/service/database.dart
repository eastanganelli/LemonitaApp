import 'package:tip_calculator/schemas/country.schema.dart';

class DatabaseData {
  String version = "";
  Map<String, CountryData> countries = {};
  Map<String, String> translations = {};

  static _remoteData() {}

  static _localData() {}

  static _updateDatabase() async {
    // Simulate updating data in a database or API
    await Future.delayed(const Duration(seconds: 1));
    return DatabaseData();
  }

  static loadDatabase(final String remote) async {
    // Simulate loading data from a database or API
    await Future.delayed(const Duration(seconds: 1));
    return DatabaseData();
  }
}
