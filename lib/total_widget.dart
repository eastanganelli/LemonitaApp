import 'package:flutter/material.dart';

class MyTotalWidget extends StatefulWidget {
  final double amountTotal, amountPerPerson;
  const MyTotalWidget(
      {required this.amountTotal, required this.amountPerPerson});

  @override
  State<MyTotalWidget> createState() => _MyTotalWidget();
}

class _MyTotalWidget extends State<MyTotalWidget> {
  String _concurrencyType = "ARS";
  double _amountPerPerson = 0.00;

  @override
  Widget build(BuildContext context) {
    if (widget.amountPerPerson.isNaN) {
      _amountPerPerson = 0.00;
    } else {
      _amountPerPerson = widget.amountPerPerson;
    }

    return Container(
      decoration: BoxDecoration(
        color: Color.fromRGBO(255, 237, 94, 0.5),
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
            Text(
              'Total',
              style: TextStyle(
                fontSize: 18.0,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            Text(
                'Monto: ${_concurrencyType} ${widget.amountTotal.toStringAsFixed(2)}'),
            Text(
                'Por Persona: ${_concurrencyType} ${_amountPerPerson.toStringAsFixed(2)}'),
          ],
        ),
      ), //),
    );
  }
}
