import 'dart:developer' as developer;
import 'package:flutter/material.dart';

class MyTippingWidget extends StatefulWidget {
  final int amountToPay;
  final Function(double) onUpdate;

  const MyTippingWidget(this.amountToPay, this.onUpdate);

  @override
  _MyTippingWidget createState() => _MyTippingWidget();
}

class _MyTippingWidget extends State<MyTippingWidget> {
  int _porcentTip = 0;
  double _tipValue = 0.00, _tipPerson = 0.00;

  void _tipCalculation() {
    setState(() {
      _tipValue = widget.amountToPay * (_porcentTip / 100);
    });
  }

  void _decrease() {
    setState(() {
      if (_porcentTip > 0) {
        _porcentTip--;
        _tipCalculation();
      }
    });
  }

  void _increase() {
    setState(() {
      _porcentTip++;
      _tipCalculation();
    });
  }

  // MyAmountWidget({required this.onUpdate});
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.red,
        borderRadius: BorderRadius.circular(10),
      ),
      margin: const EdgeInsets.all(5.0),
      child: Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Wrap(
              children: [
                Center(
                  child: Text('Propina'),
                ),
                Center(
                  child: Text(
                    'Rango de recomendado para',
                  ),
                ),
                Center(
                  child: Text('Argentina'),
                ),
              ],
            ),
            const Wrap(
              children: [
                Text(
                  '5 a 10 porciento',
                ),
              ],
            ),
            Wrap(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    IconButton(
                      icon: const Icon(
                        Icons.remove_circle_outline,
                      ),
                      onPressed: _decrease,
                    ),
                    Center(
                      child: Text(
                        _porcentTip.toString(),
                      ),
                    ),
                    IconButton(
                      icon: const Icon(
                        Icons.add_circle_outline,
                      ),
                      onPressed: _increase,
                    ),
                  ],
                ),
              ],
            ),
            Wrap(
              children: [
                Text(
                  "Propina: \$ ",
                ),
                Text(
                  _tipValue.toStringAsFixed(2),
                ),
              ],
            ),
            const Wrap(
              children: [
                Text(
                  "\$/Persona: ",
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
