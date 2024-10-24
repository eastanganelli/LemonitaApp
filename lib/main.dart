import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:tip_calculator/amount_widget.dart';
import 'package:tip_calculator/people_widget.dart';
import 'package:tip_calculator/tipping_widget.dart';
import 'package:tip_calculator/total_widget.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp])
      .then((value) => {runApp(const MyApp())});
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculadora de Propina',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.grey),
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
  int _people = 0;
  double _myAmount = 0.0,
      _tipAmount = 0.0,
      _amountTotal = 0.0,
      _amountTotalPerPerson = 0.0;

  void _updateAmount(double newAmount) async {
    setState(() {
      _myAmount = newAmount;
    });
  }

  void _updateTip(double tipAmount) {
    setState(() {
      _tipAmount = tipAmount;
    });
  }

  void _updatePeople(int newPeople) {
    setState(() {
      _people = newPeople;
    });
  }

  void calculateTotals() {
    setState(() {
      _amountTotal = _myAmount + _tipAmount;
      _amountTotalPerPerson = _amountTotal / _people;
    });
  }

  @override
  Widget build(BuildContext context) {
    calculateTotals();

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
                      amountOfPeople: _people,
                      onUpdate: _updateTip,
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              //flex: 1,
              child: MyTotalWidget(
                amountTotal: _amountTotal,
                amountPerPerson: _amountTotalPerPerson,
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
