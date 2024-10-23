import 'package:flutter/material.dart';

class MyPeopleWidget extends StatefulWidget {
  // final Function(int) onUpdate;
  //const MyPeopleWidget(this.onUpdate);

  @override
  _MyPeopleWidget createState() => _MyPeopleWidget();
}

class _MyPeopleWidget extends State<MyPeopleWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Color.fromRGBO(73, 247, 112, 0.5),
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
                'Personas',
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
              /*inputFormatters: [
                FilteringTextInputFormatter.allow(
                  RegExp(r'[0-9]'),
                ),
                FilteringTextInputFormatter.digitsOnly,
              ],*/
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
              // onChanged: _changeAmount,
            ),
          ),
        ],
      ),
    );
  }
}
