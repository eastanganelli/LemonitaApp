import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:tip_calculator/service/gemini.dart';
import 'package:tip_calculator/service/database.dart';
import 'package:tip_calculator/service/geolocation.dart';

class TipData with ChangeNotifier {
  // DatabaseData? _databaseData = DatabaseData();
  GeminiAPI? _geminiAPI;
  TipPorcentData? _recommendedTip;
  double _amount = 0.00 /*, _tip = 0.00, _tipPerson = 0.00*/;
  int _people = 0, _tipPercent = 0;
  String _actualPosition = "";

  TipData() {
    _initialize();
  }

  String get recommendedTip =>
      ((_recommendedTip != null) ? _recommendedTip!.message : "No disponible");
  int get tipPercent => _tipPercent;
  int get people => _people;
  double get amount => (_amount);
  double get tip => (_amount * (_tipPercent / 100));
  double get tipPerson => ((_people > 0) ? (tip / _people) / _people : 0.00);
  double get total => (_amount + tip);
  double get totalPerPerson => ((_amount + tip) / _people);

  Future<void> _initialize() async {
    _actualPosition = await Geolocation.getCurrentLocation();
    _geminiAPI = GeminiAPI(
      apiModel: dotenv.env['GEMINI_MODEL'] ?? "gemini-2.0-flash",
      apiBaseUrl: dotenv.env['GEMINI_API_BASE_URL'] ?? "",
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
