import 'package:flutter/material.dart';

class MyAmountWidget extends StatefulWidget {
  final Function(int) onUpdate;

  const MyAmountWidget(this.onUpdate);

  @override
  _MyAmountWidget createState() => _MyAmountWidget();
}

class _MyAmountWidget extends State<MyAmountWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(10),
      ),
      margin: EdgeInsets.all(5.0),
      child: Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Wrap(
              children: [
                Text('Monto'),
              ],
            ),
            Padding(
              padding: EdgeInsets.only(
                left: 15,
                right: 15,
                bottom: 10,
              ),
              child: TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Monto',
                  filled: false,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
