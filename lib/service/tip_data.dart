import 'package:flutter/foundation.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:tip_calculator/service/database.dart';
import 'package:tip_calculator/service/gemini.dart';

class TipData with ChangeNotifier {
  // DatabaseData? _databaseData = DatabaseData();
  // GeminiAPI? _geminiAPI = GeminiAPI(
  //   apiModel: "gemini-2.0-flash",
  //   apiBaseUrl: "",
  // );
  double _amount = 0.00 /*, _tip = 0.00, _tipPerson = 0.00*/;
  int _people = 0, _tipPercent = 0;
  String _recommendedTip = "";

  TipData() {}

  String get recommendedTip => _recommendedTip;
  int get tipPercent => _tipPercent;
  int get people => _people;
  double get amount => (_amount);
  double get tip => (_amount * (_tipPercent / 100));
  double get tipPerson => ((_people > 0) ? (tip / _people) / _people : 0.00);
  double get total => (_amount + tip);
  double get totalPerPerson => ((_amount + tip) / _people);

  void setAmount(double newAmount) {
    _amount = newAmount;
    notifyListeners();
  }

  void setPeople(int newPeople) {
    _people = newPeople;
    notifyListeners();
  }

  void setRecommendedTip(String newRecommendedTip) {
    _recommendedTip = newRecommendedTip;
    notifyListeners();
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
