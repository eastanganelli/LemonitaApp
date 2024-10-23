import 'package:flutter/material.dart';

class MyTotalWidget extends StatefulWidget {
  @override
  State<MyTotalWidget> createState() => _MyTotalWidget();
}

class _MyTotalWidget extends State<MyTotalWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.pink,
        borderRadius: BorderRadius.circular(10),
      ),
      margin: const EdgeInsets.all(5.0),
      //child: Center(
      child: Wrap(
        spacing: 2,
        children: [
          Text('Total Pink Container'),
          Text('TotalPink Container'),
        ],
      ),
      //),
    );
  }
}
