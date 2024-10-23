import 'package:flutter/material.dart';
import 'package:tip_calculator/amountWidget.dart';
import 'package:tip_calculator/peopleWidget.dart';
import 'package:tip_calculator/tippingWidget.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora de Propina',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.black12),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Calculadora de Propina'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _myAmount = 0;
  double _TipAmount = 0;

  void _updateAmount(int _newAmount) {
    setState(() {
      _myAmount = _newAmount;
    });
  }

  void _updateData(double tipAmount) {
    setState(() {
      _TipAmount = tipAmount;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              flex: 3,
              child: Row(
                children: [
                  Expanded(
                    flex: 2,
                    child: Column(
                      children: [
                        Expanded(
                          child: MyAmountWidget(_updateAmount),
                        ),
                        Expanded(
                          child: MyPeopleWidget(),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 2,
                    child: MyTippingWidget(_myAmount, _updateData),
                  ),
                ],
              ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.pink,
                  borderRadius: BorderRadius.circular(10),
                ),
                margin: const EdgeInsets.all(5.0),
                child: Center(
                  child: Text('Total  Pink Container'),
                ),
              ),
            ),
            Expanded(
              flex: 2,
              child: Container(
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
