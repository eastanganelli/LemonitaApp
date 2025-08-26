import 'dart:convert';
import 'dart:io';
import 'package:tip_calculator/service/network.dart';
import 'package:tip_calculator/schemas/country.dart';
import 'package:tip_calculator/schemas/language.dart';

class DatabaseData {
  String _version;
  CountryData? _countryData;
  LanguagueData? _languageData;

  DatabaseData() : _version = "", _countryData = null, _languageData = null;
  String get version => _version;
  CountryData? get countryData => _countryData;
  LanguagueData? get languageData => _languageData;

  void setVersion(final String version) {
    _version = version;
  }

  void setCountryData(final CountryData countryData) {
    _countryData = countryData;
  }

  void setLanguageData(final LanguagueData languageData) {
    _languageData = languageData;
  }

  static Future<dynamic> _readRemoteData(final String remote) async {
    final isConnected = await Network.checkConnection();
    if (isConnected) {
      try {
        final response = await Network.fetchData(remote);
        // Parse the JSON response and return a DatabaseData instance
        return jsonDecode(response);
      } catch (e) {
        throw DatabaseRemoteException("Failed to fetch remote database: $e");
      }
    } else {
      throw ConnectionNetwork("No internet connection");
    }
  }

  static Future<dynamic> _readLocalData(final String local) async {
    final file = File(local);
    if (file.existsSync()) {
      final content = await file.readAsString();
      // Parse the JSON content and return a DatabaseData instance
      return jsonDecode(content);
    } else {
      throw DatabaseLocalException("Local database file not found");
    }
  }

  static Future<dynamic> _writeLocalData(
    final String local,
    final dynamic data,
  ) async {
    final file = File(local);
    await file.writeAsString(data);
  }

  static Future<dynamic> _initDatabase(
    final String remote,
    final String local,
  ) async {
    try {
      try {
        final resultLocal = await _readLocalData(local),
            resultRemote = await _readRemoteData(remote);
        if (resultLocal["version"].toString() !=
            resultRemote["version"].toString()) {
          await _writeLocalData(local, resultRemote);
          return resultRemote;
        }
        return resultLocal;
      } on DatabaseLocalException {
        final result = await _readRemoteData(remote);
        await _writeLocalData(local, jsonEncode(result));
        return jsonEncode(result);
      }
    } on DatabaseRemoteException catch (_) {
      return;
    } on ConnectionNetwork catch (_) {
      return;
    }
  }

  static Future<DatabaseData> loadDatabase(
    final String remote,
    final String local,
    final String country,
    final String language,
  ) async {
    final result = await _initDatabase(remote, local);
    if (result != null) {
      final DatabaseData dbData = DatabaseData();
      dbData.setVersion(result["version"].toString());
      CountryData filteredCountry = CountryData.filterCountrys(
        result["database"],
        country,
      );
      dbData.setCountryData(filteredCountry);
      final filteredLanguage = LanguagueData.filterLanguages(
        result["languages"],
        language,
      );
      dbData.setLanguageData(filteredLanguage);
      return dbData;
    }
    return DatabaseData();
  }
}

class DatabaseLocalException implements Exception {
  final String message;
  DatabaseLocalException(this.message);
  @override
  String toString() => "LocalException: $message";
}

class DatabaseRemoteException implements Exception {
  final String message;
  DatabaseRemoteException(this.message);
  @override
  String toString() => "LocalException: $message";
}
