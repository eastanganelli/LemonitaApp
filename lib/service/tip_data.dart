import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:tip_calculator/service/gemini.dart';
import 'package:tip_calculator/service/database.dart';
import 'package:tip_calculator/service/language.dart';
import 'package:tip_calculator/schemas/tip.dart';
import 'package:tip_calculator/service/geolocation.dart';

class TipData with ChangeNotifier {
  DatabaseData? _databaseData;
  GeminiAPI? _geminiAPI;
  TipPorcentData? _recommendedTip;
  double _amount = 0.00;
  int _people = 0, _tipPercent = 0;
  String _actualPosition = "";

  TipData() {
    _initialize();
  }

  String get countryName =>
      (_databaseData != null && _databaseData!.countryData != null)
      ? _databaseData!.countryData!.country
      : "";
  String get recommendedTip =>
      ((_recommendedTip != null) ? _recommendedTip!.message : "");
  int get tipPercent => _tipPercent;
  int get people => _people;
  double get amount => (_amount);
  double get tip => (_amount * (_tipPercent / 100));
  double get tipPerson => ((_people > 0) ? (tip / _people) / _people : 0.00);
  double get total => (_amount + tip);
  double get totalPerPerson => ((_amount + tip) / _people);
  String get currencySymbol =>
      (_databaseData != null && _databaseData!.countryData != null)
      ? _databaseData!.countryData!.currency.symbol
      : "\$";
  String get currencyName =>
      (_databaseData != null && _databaseData!.countryData != null)
      ? _databaseData!.countryData!.currency.name
      : "USD";
  Map<String, String> get translations =>
      (_databaseData != null && _databaseData!.languageData != null)
      ? _databaseData!.languageData!.translations
      : {};

  Future<void> _initialize() async {
    final dir = await getTemporaryDirectory();
    final dbLocal = '${dir.path}/database.json';
    final langCode = Language.getLanguageCode();
    _actualPosition = await Geolocation.getCurrentLocation("country");
    _databaseData = await DatabaseData.loadDatabase(
      dotenv.env['DB_PATH'].toString(),
      dbLocal,
      _actualPosition,
      langCode,
    );
    _geminiAPI = GeminiAPI(
      apiKey: dotenv.env['GEMINI_API_KEY'].toString(),
      apiUrl: dotenv.env['GEMINI_API_URL'].toString(),
    );
    notifyListeners();
  }

  void setAmount(double newAmount) {
    _amount = newAmount;
    notifyListeners();
  }

  void setPeople(int newPeople) {
    _people = newPeople;
    notifyListeners();
  }

  void getRecommendedTip() async {
    if (_geminiAPI != null && _actualPosition.isNotEmpty) {
      _recommendedTip = await _geminiAPI!.generateContent(
        country: _actualPosition,
        type: "waiter",
      );
      _tipPercent = _recommendedTip!.avgVal.toInt();
      notifyListeners();
    }
  }

  void incrementTipPorcent() {
    _tipPercent++;
    notifyListeners();
  }

  void decrementTipPorcent() {
    _tipPercent--;
    notifyListeners();
  }
}
