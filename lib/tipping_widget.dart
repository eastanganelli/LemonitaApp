import 'dart:convert';
import 'package:language_code/language_code.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tip_calculator/service/gemini.dart';
import 'package:tip_calculator/service/tip_data.dart';
// import 'package:tip_calculator/service/shared_data.dart';

class MyTippingWidget extends StatefulWidget {
  const MyTippingWidget({super.key});

  @override
  State<MyTippingWidget> createState() => _MyTippingWidgetState();
}

class _MyTippingWidgetState extends State<MyTippingWidget> {
  final String concurrencyType = "ARS";
  // String recommendedTip = "5 a 10 porciento";

  @override
  Widget build(BuildContext context) {
    return Consumer<TipData>(
      builder: (context, shareddata, child) {
        GeminiAPI myApi;
        return Container(
          decoration: BoxDecoration(
            color: const Color.fromRGBO(255, 49, 85, 0.5),
            borderRadius: BorderRadius.circular(10),
          ),
          margin: const EdgeInsets.all(5.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              /* const */ Wrap(
                children: [
                  Center(
                    child: Text(
                      'Propina',
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),
                  Center(
                    child: MaterialButton(
                      onPressed: () {
                        myApi = GeminiAPI(
                          apiModel: "gemini-2.0-flash",
                          apiBaseUrl: "",
                        );
                        debugPrint(
                          'Country Code: ${LanguageCode.rawLocale.countryCode}',
                        );
                        debugPrint(
                          'Language Code: ${LanguageCode.rawLocale.languageCode}',
                        );
                        // debugPrint(
                        //   'Location: ${Geolocator.getCurrentPosition()}',
                        // );
                        myApi
                            .generateContent(
                              country: "Argentina",
                              type: "waiter",
                            )
                            .then((String response) {
                              // debugPrint("Response: $response");
                              final Map<String, dynamic> data = jsonDecode(
                                response,
                              );
                              final String minVal = data['min'].toString();
                              final String avgVal = data['avg'].toString();
                              final String maxVal = data['max'].toString();
                              shareddata.setRecommendedTip(
                                "Mínimo: $minVal, Promedio: $avgVal, Máximo: $maxVal",
                              );
                            })
                            .catchError((error) {
                              debugPrint("Error: $error");
                            });
                      },
                      child: const Text(
                        'Recomendado',
                        style: TextStyle(
                          // fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ),
                  // Center(
                  //   child: Text(
                  //     //'Rango de recomendado para',
                  //     'Rango de recomendado',
                  //     style: TextStyle(
                  //       // fontWeight: FontWeight.bold,
                  //       color: Colors.black,
                  //     ),
                  //   ),
                  // ),
                  /*Center(
                    child: Text(
                      'Argentina',
                      style: TextStyle(
                        // fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),*/
                ],
              ),
              Wrap(
                children: [
                  Text(
                    context.read<TipData>().recommendedTip,
                    style: const TextStyle(
                      // fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              Wrap(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: [
                      const Spacer(),
                      IconButton(
                        icon: const Icon(Icons.remove_circle_outline),
                        onPressed: () {
                          if (context.read<TipData>().tipPercent > 0) {
                            shareddata.decrementTipPorcent();
                          }
                        },
                      ),
                      const Spacer(),
                      Center(
                        child: Text(
                          context.read<TipData>().tipPercent.toString(),
                          style: const TextStyle(
                            // fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                      ),
                      const Spacer(),
                      IconButton(
                        icon: const Icon(Icons.add_circle_outline),
                        onPressed: () {
                          shareddata.incrementTipPorcent();
                        },
                      ),
                      const Spacer(),
                    ],
                  ),
                ],
              ),
              Wrap(
                children: [
                  Text(
                    "Total: $concurrencyType ${shareddata.tip.toStringAsFixed(2)}",
                    style: const TextStyle(
                      //  fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              if (context.read<TipData>().people > 1)
                Wrap(
                  children: [
                    Text(
                      "Por Persona: $concurrencyType ${shareddata.tipPerson.toStringAsFixed(2)}",
                      style: const TextStyle(
                        // fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
            ],
          ),
        );
      },
    );
  }
}
