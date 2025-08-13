import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tip_calculator/service/shared_data.dart';

class MyTippingWidget extends StatefulWidget {
  const MyTippingWidget({super.key});

  @override
  State<MyTippingWidget> createState() => _MyTippingWidgetState();
}

class _MyTippingWidgetState extends State<MyTippingWidget> {
  final String concurrencyType = "ARS";

  @override
  Widget build(BuildContext context) {
    return Consumer<SharedData>(builder: (context, shareddata, child) {
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
            const Wrap(
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
                  child: Text(
                    //'Rango de recomendado para',
                    'Rango de recomendado',
                    style: TextStyle(
                      // fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ),
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
            const Wrap(
              children: [
                Text(
                  '5 a 10 porciento',
                  style: TextStyle(
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
                      icon: const Icon(
                        Icons.remove_circle_outline,
                      ),
                      onPressed: () {
                        if (context.read<SharedData>().tipPercent > 0) {
                          shareddata.setDecrementTipPorcent();
                        }
                      },
                    ),
                    const Spacer(),
                    Center(
                      child: Text(
                        context.read<SharedData>().tipPercent.toString(),
                        style: const TextStyle(
                          // fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    const Spacer(),
                    IconButton(
                      icon: const Icon(
                        Icons.add_circle_outline,
                      ),
                      onPressed: () {
                        shareddata.setIncrementTipPorcent();
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
                  "Total: $concurrencyType ${shareddata.tipAmount.toStringAsFixed(2)}",
                  style: const TextStyle(
                    //  fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ],
            ),
            if (context.read<SharedData>().people > 1)
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
              )
          ],
        ),
      );
    });
  }
}
