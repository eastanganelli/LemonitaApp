import 'package:flutter/material.dart';
import 'package:tip_calculator/amount_widget.dart';
import 'package:tip_calculator/people_widget.dart';
import 'package:tip_calculator/tipping_widget.dart';
import 'package:tip_calculator/total_widget.dart';

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
  int _People = 0;
  double _myAmount = 0.0, _TipAmount = 0.0;

  void _updateAmount(double _newAmount) {
    setState(() {
      _myAmount = _newAmount;
    });
  }

  void _updateData(double tipAmount) {
    setState(() {
      _TipAmount = tipAmount;
    });
  }

  void _updatePeople(int newPeople) {
    setState(() {
      _People = newPeople;
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
                          child: MyAmountWidget(
                            onUpdate: _updateAmount,
                          ),
                        ),
                        Expanded(
                          child: MyPeopleWidget(
                            onUpdate: _updatePeople,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Expanded(
                    flex: 2,
                    child: MyTippingWidget(
                      amountToPay: _myAmount,
                      amountOfPeople: _People,
                      onUpdate: _updateAmount,
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              //flex: 1,
              child: MyTotalWidget(),
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
