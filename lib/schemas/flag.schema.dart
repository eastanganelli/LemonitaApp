class FlagData {
  final String _localpath = "";
  final String _webpng = "";
  final String _flag = "";
  FlagData({
    required String localpath,
    required String webpng,
    required String flag,
  });
  String get name => _localpath;
  String get code => _webpng;
  String get flag => _flag;
}
