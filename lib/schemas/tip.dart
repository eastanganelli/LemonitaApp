class TipPorcentData {
  final String _minVal, _avgVal, _maxVal;
  TipPorcentData({
    required String minVal,
    required String avgVal,
    required String maxVal,
  }) : _minVal = minVal,
       _avgVal = avgVal,
       _maxVal = maxVal;
  String get minValTxt => _minVal;
  int get minVal => (int.parse(_minVal.replaceAll('%', '')));
  String get avgValTxt => _avgVal;
  int get avgVal => (int.parse(_avgVal.replaceAll('%', '')));
  String get maxValTxt => _maxVal;
  int get maxVal => (int.parse(_maxVal.replaceAll('%', '')));
  String get message => ('Min: $_minVal, Avg: $_avgVal, Max: $_maxVal');
}
