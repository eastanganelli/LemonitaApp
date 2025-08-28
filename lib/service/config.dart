// import 'package:flutter_dotenv/flutter_dotenv.dart';

class Config {
  /// GEMINI
  static final String _GEMINI_API_URL =
      // dotenv.env['GEMINI_API_KEY'] ??
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  static final String _GEMINI_API_KEY =
      /* dotenv.env['GEMINI_API_URL'] ?? */ '';

  /// IP_API
  static final String _IP_API_URL =
      // dotenv.env['IP_API_URL'] ??
      'http://ip-api.com/json/?fields=status,country,countryCode';

  /// GITHUB
  static final String _DB_PATH =
      // dotenv.env['DB_PATH']
      'https://gist.githubusercontent.com/eastanganelli/f36853425b3b58a064d44f4920b8a588/raw/';

  static String get GEMINI_API_URL => _GEMINI_API_URL;
  static String get GEMINI_API_KEY => _GEMINI_API_KEY;
  static String get IP_API_URL => _IP_API_URL;
  static String get DB_PATH => _DB_PATH;
}
