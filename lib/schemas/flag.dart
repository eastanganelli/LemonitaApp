class FlagData {
  final String _localpath, _webpng, _flag;
  FlagData({
    required String localpath,
    required String webpng,
    required String flag,
  }) : _localpath = localpath,
       _webpng = webpng,
       _flag = flag;
  String get name => _localpath;
  String get code => _webpng;
  String get flag => _flag;
}
