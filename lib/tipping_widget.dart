import 'package:flutter/material.dart';

class MyTippingWidget extends StatefulWidget {
  final double amountToPay;
  final int amountOfPeople;
  final Function(double) onUpdate;

  const MyTippingWidget(
      {required this.amountToPay,
      required this.amountOfPeople,
      required this.onUpdate});

  @override
  State<MyTippingWidget> createState() => _MyTippingWidget();
}

class _MyTippingWidget extends State<MyTippingWidget> {
  final String _concurrencyType = "ARS";
  int _porcentTip = 0;
  double _tipValue = 0.00, _tipPerson = 0.00;

  void _tipCalculation() async {
    setState(() {
      _tipValue = widget.amountToPay * (_porcentTip / 100);
      widget.onUpdate(_tipValue);
    });
  }

  void _tipCalculationByPerson() {
    _tipPerson = _tipValue / widget.amountOfPeople;
    if (_tipPerson.isNaN) {
      _tipPerson = 0.00;
    }
  }

  void _decrease() {
    setState(() {
      if (_porcentTip > 0) {
        _porcentTip--;
        _tipCalculation();
        _tipCalculationByPerson();
      }
    });
  }

  void _increase() {
    setState(() {
      _porcentTip++;
      _tipCalculation();
      _tipCalculationByPerson();
    });
  }

  @override
  Widget build(BuildContext context) {
    _tipCalculation();
    _tipCalculationByPerson();

    return Container(
      decoration: BoxDecoration(
        color: const Color.fromRGBO(255, 49, 85, 0.5),
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
                    'Rango de recomendado para',
                    style: TextStyle(
                      // fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ),
                Center(
                  child: Text(
                    'Argentina',
                    style: TextStyle(
                      // fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                  ),
                ),
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
                      onPressed: _decrease,
                    ),
                    const Spacer(),
                    Center(
                      child: Text(
                        _porcentTip.toString(),
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
                      onPressed: _increase,
                    ),
                    const Spacer(),
                  ],
                ),
              ],
            ),
            Wrap(
              children: [
                Text(
                  "Propina: ${_concurrencyType} ${_tipValue.toStringAsFixed(2)}",
                  style: const TextStyle(
                    //  fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ],
            ),
            Wrap(
              children: [
                Text(
                  "Persona: ${_concurrencyType} ${_tipPerson.toStringAsFixed(2)}",
                  style: const TextStyle(
                    // fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
