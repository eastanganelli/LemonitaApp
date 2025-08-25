import 'dart:convert';
import 'package:http/http.dart' as http;

class Network {
  static Future<bool> checkConnection() async {
    try {
      final response = await http
          .get(Uri.parse("https://www.google.com"))
          .timeout(const Duration(seconds: 5));
      return response.statusCode == 200;
    } catch (_) {
      return false;
    }
  }

  /// Fecth data from a given URL.
  static Future<String> fetchData(final String url) {
    return http
        .get(Uri.parse(url))
        .then((response) {
          if (response.statusCode == 200) {
            return response.body;
          } else {
            throw Exception('Failed to load data');
          }
        })
        .catchError((error) {
          throw Exception('Error fetching data: $error');
        });
  }

  // static Future<String> fetchData(
  //   final String url,
  //   final Map<String, String> header,
  //   final Map<String, dynamic> body,
  // ) {
  //   return http
  //       .get(Uri.parse(url), headers: header)
  //       .then((response) {
  //         if (response.statusCode == 200) {
  //           return response.body;
  //         } else {
  //           throw Exception('Failed to load data');
  //         }
  //       })
  //       .catchError((error) {
  //         throw Exception('Error fetching data: $error');
  //       });
  // }

  /// Post data to a given URL with headers and body.
  /// Returns the response body as a string.
  /// @param url The URL to post data to.
  /// @param header The headers to include in the request.
  /// @param body The body of the request, encoded as JSON.
  static Future<String> postData(
    final String url,
    final Map<String, String> header,
    final Map<String, dynamic> body,
  ) {
    return http
        .post(Uri.parse(url), headers: header, body: jsonEncode(body))
        .then((response) {
          if (response.statusCode == 200 || response.statusCode == 201) {
            return response.body;
          } else {
            throw Exception('Failed to post data');
          }
        })
        .catchError((error) {
          throw Exception('Error posting data: $error');
        });
  }
}
