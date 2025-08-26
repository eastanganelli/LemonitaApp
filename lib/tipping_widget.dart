import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tip_calculator/service/tip_data.dart';

class MyTippingWidget extends StatefulWidget {
  const MyTippingWidget({super.key});

  @override
  State<MyTippingWidget> createState() => _MyTippingWidgetState();
}

class _MyTippingWidgetState extends State<MyTippingWidget> {
  @override
  Widget build(BuildContext context) {
    return Consumer<TipData>(
      builder: (context, shareddata, child) {
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
                      '${shareddata.translations['tip_title']}',
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
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
                    "${shareddata.translations['tip_total']}: ${shareddata.currencySymbol} ${shareddata.tip.toStringAsFixed(2)}",
                    style: const TextStyle(
                      //  fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ],
              ),
              if (context.read<TipData>().people > 1) ...[
                Wrap(
                  children: [
                    Text(
                      "${shareddata.translations['tip_total_per_person']}: ${shareddata.currencySymbol} ${shareddata.tipPerson.toStringAsFixed(2)}",
                      style: const TextStyle(
                        // fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ],
                ),
              ],
              if (context.read<TipData>().countryName.isNotEmpty) ...[
                Center(
                  child: MaterialButton(
                    onPressed: () => shareddata.getRecommendedTip(),
                    child: Text(
                      '${shareddata.translations['tip_button_text']?.replaceAll('\$countryName', context.read<TipData>().countryName)}',
                      style: TextStyle(
                        // fontWeight: FontWeight.bold,
                        color: Colors.black,
                      ),
                    ),
                  ),
                ),
                if (context.read<TipData>().recommendedTip.isNotEmpty) ...[
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
                ],
              ],
            ],
          ),
        );
      },
    );
  }
}
