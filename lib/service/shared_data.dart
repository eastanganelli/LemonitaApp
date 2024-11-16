import 'package:flutter/foundation.dart';

class SharedData with ChangeNotifier {
  double _amount = 0.00, _tipAmount = 0.00, _tipPerson = 0.00;
  int _people = 0, _tipPercent = 0;

  double get amount => _amount;
  double get tipAmount => _tipAmount;
  double get tipPerson => _tipPerson;
  int get tipPercent => _tipPercent;
  int get people => _people;

  void setAmount(double newAmount) {
    _amount = newAmount;
    refreshUI();
  }

  void setPeople(int newPeople) {
    _people = newPeople;
    refreshUI();
  }

  void setIncrementTipPorcent() {
    _tipPercent++;
    refreshUI();
  }

  void setDecrementTipPorcent() {
    _tipPercent--;
    refreshUI();
  }

  double getTip() {
    return (_amount * (_tipPercent / 100));
  }

  double getTipPerPerson() {
    return ((_amount * (_tipPercent / 100)) / _people);
  }

  double getTotal() {
    return (_amount + _tipAmount);
  }

  double getTotalPerPerson() {
    return ((_amount + _tipAmount) / _people);
  }

  void tipCalculation() {
    _tipAmount = _amount * (_tipPercent / 100);
  }

  void tipCalculationByPerson() {
    _tipPerson = _tipAmount / _people;
    if (_tipPerson.isNaN || _tipPerson.isInfinite) {
      _tipPerson = 0.00;
    }
  }

  void refreshUI() {
    tipCalculation();
    tipCalculationByPerson();
    notifyListeners();
  }
}
