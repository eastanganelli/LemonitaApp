import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tip_calculator/service/shared_data.dart';

class MyTotalWidget extends StatefulWidget {
  const MyTotalWidget({super.key});

  @override
  State<MyTotalWidget> createState() => _MyTotalWidgetState();
}

class _MyTotalWidgetState extends State<MyTotalWidget> {
  final String _concurrencyType = "ARS";

  @override
  Widget build(BuildContext context) {
    return Consumer<SharedData>(builder: (context, shareddata, child) {
      return Container(
        decoration: BoxDecoration(
          color: const Color.fromRGBO(255, 237, 94, 0.5),
          borderRadius: BorderRadius.circular(10),
        ),
        margin: const EdgeInsets.all(5.0),
        child: Padding(
          padding: const EdgeInsets.only(
            left: 15,
            right: 15,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Total',
                style: TextStyle(
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              Center(
                child: Text(
                    'Monto: $_concurrencyType ${shareddata.getTotal().toStringAsFixed(2)}'),
              ),
              if (context.read<SharedData>().people > 1)
                Center(
                  child: Text(
                      'Por Persona: $_concurrencyType ${shareddata.getTotalPerPerson().toStringAsFixed(2)}'),
                ),
            ],
          ),
        ),
      );
    });
  }
}
