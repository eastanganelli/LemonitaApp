import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:tip_calculator/service/database.dart';

class TipRecommendation {
  final String _minVal, _avgVal, _maxVal;
  TipRecommendation({
    required String minVal,
    required String avgVal,
    required String maxVal,
  }) : _minVal = minVal,
       _avgVal = avgVal,
       _maxVal = maxVal;
  String get minVal => _minVal;
  String get avgVal => _avgVal;
  String get maxVal => _maxVal;
}

class GeminiAPI {
  final String _apiKey = dotenv.env['GEMINI_API_KEY'] ?? "";
  String _apiUrl = "";
  GeminiAPI({required String apiModel, required String apiBaseUrl}) {
    _apiUrl =
        "https://generativelanguage.googleapis.com/v1beta/models/$apiModel:generateContent";
  }
  Future<TipPorcentData> generateContent({
    required String country,
    required String type,
  }) async {
    final Map<String, dynamic> requestBody = {
      "contents": [
        {
          "parts": [
            {
              "text":
                  "Can you tell me which is the recommended porcent tip for $type in $country? Please, give the result without using markdown in the following format: { \"min\": \"minVal\", \"avg\": \"avgVal\", \"max\": \"maxVal\" }",
            },
          ],
        },
      ],
    };
    try {
      final http.Response response = await http.post(
        Uri.parse(_apiUrl),
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': _apiKey,
        },
        body: jsonEncode(requestBody),
      );

      if (response.statusCode == 200) {
        final responseData = jsonDecode(response.body);
        final tipResult = jsonDecode(
          responseData['candidates'][0]['content']['parts'][0]['text'],
        );
        final TipPorcentData generatedText = TipPorcentData(
          minVal: tipResult['min'],
          avgVal: tipResult['avg'],
          maxVal: tipResult['max'],
        );
        return generatedText;
      }
      final String errorString =
          "Error: ${response.statusCode} - ${response.reasonPhrase}";
      throw errorString;
    } catch (e) {
      final String errorString = "Error generating content: $e";
      throw errorString;
    }
  }
}
