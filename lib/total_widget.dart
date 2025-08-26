import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
// import 'package:tip_calculator/service/shared_data.dart';
import 'package:tip_calculator/service/tip_data.dart';

class MyTotalWidget extends StatefulWidget {
  const MyTotalWidget({super.key});

  @override
  State<MyTotalWidget> createState() => _MyTotalWidgetState();
}

class _MyTotalWidgetState extends State<MyTotalWidget> {
  @override
  Widget build(BuildContext context) {
    return Consumer<TipData>(
      builder: (context, shareddata, child) {
        return Container(
          decoration: BoxDecoration(
            color: const Color.fromRGBO(255, 237, 94, 0.5),
            borderRadius: BorderRadius.circular(10),
          ),
          margin: const EdgeInsets.all(5.0),
          child: Padding(
            padding: const EdgeInsets.only(left: 15, right: 15),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  '${shareddata.translations['total_title']}',
                  style: TextStyle(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                Center(
                  child: Text(
                    '${shareddata.translations['total_amount']}: ${shareddata.currencySymbol} ${shareddata.total.toStringAsFixed(2)}',
                  ),
                ),
                if (context.read<TipData>().people > 1)
                  Center(
                    child: Text(
                      '${shareddata.translations['total_per_person']}: ${shareddata.currencySymbol} ${shareddata.totalPerPerson.toStringAsFixed(2)}',
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}
