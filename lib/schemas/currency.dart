class CurrencyData {
  final String _name, _symbol;
  CurrencyData({required String name, required String symbol})
    : _name = name,
      _symbol = symbol;
  String get name => _name;
  String get symbol => _symbol;
}
