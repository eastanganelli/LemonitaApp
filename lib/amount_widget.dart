import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyAmountWidget extends StatefulWidget {
  final Function(double) onUpdate;

  const MyAmountWidget({super.key, required this.onUpdate});

  @override
  State<MyAmountWidget> createState() => _MyAmountWidget();
}

class _MyAmountWidget extends State<MyAmountWidget> {
  double _amount = 0.0;

  void _changeAmount(String newValue) async {
    setState(() {
      _amount = double.parse(newValue.replaceAll(",", "."));
    });
    widget.onUpdate(_amount);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color.fromRGBO(45, 174, 253, 0.5),
        borderRadius: BorderRadius.circular(10),
      ),
      margin: const EdgeInsets.all(5.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Wrap(
            children: [
              Text(
                'Monto',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: 15,
              right: 15,
              bottom: 10,
            ),
            child: TextField(
              keyboardType:
                  const TextInputType.numberWithOptions(decimal: true),
              inputFormatters: [
                FilteringTextInputFormatter.allow(
                    RegExp(r'[0-9]+[,|.]{0,1}[0-9]*')),
                TextInputFormatter.withFunction(
                  (oldValue, newValue) => newValue.copyWith(
                    text: newValue.text.replaceAll('.', ','),
                  ),
                ),
              ],
              decoration: const InputDecoration(
                border: UnderlineInputBorder(
                  borderSide: BorderSide(
                    color: Colors.black,
                  ),
                ),
                labelText: 'Ingrese valor',
                labelStyle: TextStyle(
                  // fontWeight: FontWeight.bold,
                  fontSize: 14,
                ),
                filled: false,
              ),
              onChanged: _changeAmount,
            ),
          ),
        ],
      ),
    );
  }
}
