import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyPeopleWidget extends StatefulWidget {
  final Function(int) onUpdate;
  const MyPeopleWidget({required this.onUpdate});

  @override
  State<MyPeopleWidget> createState() => _MyPeopleWidget();
}

class _MyPeopleWidget extends State<MyPeopleWidget> {
  int _People = 1;

  void onPeopleChanged(String _value) {
    setState(() {
      _People = int.parse(_value);
      widget.onUpdate(_People);
    });
  }

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
              inputFormatters: [
                FilteringTextInputFormatter.digitsOnly,
              ],
              decoration: const InputDecoration(
                border: UnderlineInputBorder(
                  borderSide: BorderSide(
                    color: Colors.black,
                  ),
                ),
                labelText: 'Ingronese valor',
                labelStyle: TextStyle(
                  // fontWeight: FontWeight.bold,
                  fontSize: 14,
                ),
                filled: false,
              ),
              onChanged: onPeopleChanged,
            ),
          ),
        ],
      ),
    );
  }
}
