import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
// import 'package:google_mobile_ads/google_mobile_ads.dart';
// import 'package:tip_calculator/service/shared_data.dart';
import 'package:tip_calculator/service/tip_data.dart';
import 'package:tip_calculator/amount_widget.dart';
import 'package:tip_calculator/people_widget.dart';
import 'package:tip_calculator/tipping_widget.dart';
import 'package:tip_calculator/total_widget.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
// import 'package:tip_calculator/components/modal_language.dart';

Future main() async {
  await dotenv.load(fileName: "assets/.env");
  WidgetsFlutterBinding.ensureInitialized();
  // await MobileAds.instance.initialize();
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]).then(
    (value) => {
      runApp(
        MultiProvider(
          providers: [ChangeNotifierProvider(create: (_) => TipData())],
          child: const MyApp(),
        ),
      ),
    },
  );
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
  final String title;
  const MyHomePage({super.key, required this.title});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // bool isBannerLoaded = false;
  // late BannerAd bannerAd;

  Future<void> inilizeBannerAd() async {
    // bannerAd = BannerAd(
    //   size: AdSize.banner,
    //   adUnitId: 'ca-app-pub-2237199373273098/8606613360',
    //   listener: BannerAdListener(
    //     onAdLoaded: (ad) {
    //       setState(() {
    //         isBannerLoaded = true;
    //         print("Banner has been loaded!");
    //       });
    //     },
    //     onAdFailedToLoad: (ad, error) {
    //       ad.dispose();
    //       isBannerLoaded = false;
    //       print(error);
    //     },
    //   ),
    //   request: const AdRequest(),
    // );

    // bannerAd.load();
  }

  @override
  void initState() {
    super.initState();
    inilizeBannerAd();
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
                        Expanded(child: MyAmountWidget()),
                        Expanded(child: MyPeopleWidget()),
                      ],
                    ),
                  ),
                  Expanded(flex: 2, child: MyTippingWidget()),
                ],
              ),
            ),
            const Expanded(
              //flex: 1,
              child: MyTotalWidget(),
            ),
            Expanded(flex: 2, child: Container(color: Colors.white)),
          ],
        ),
      ),
      // floatingActionButton: FloatingActionButton.small(
      //   child: const Icon(Icons.language_rounded),
      //   onPressed: () async {
      //     bool? confirmed =
      //         await showMyLanguageDialog(context); // Wait for the result

      //     if (confirmed == true) {
      //       // Perform action if confirmed
      //       ScaffoldMessenger.of(context).showSnackBar(
      //         const SnackBar(content: Text('Action Confirmed!')),
      //       );
      //     }
      //   },
      // ),
    );
  }
}
