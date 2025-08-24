import 'dart:convert';
import 'package:http/http.dart' as http;

class Geolocation {
  static Future<String> getCurrentLocation() async {
    try {
      final response = await http.get(
        Uri.parse('http://ip-api.com/json/?fields=status,country,countryCode'),
      );
      if (response.statusCode == 200) {
        final locationCode = jsonDecode(response.body);
        return locationCode["countryCode"] as String;
      } else {
        throw Exception('Failed to load location');
      }
    } catch (e) {
      throw Exception('Error fetching location');
    }
  }
}
