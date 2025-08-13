// import 'package:flutter/material.dart';

// class LanguageUI {
//   String langCode = "", langName = "";
//   LanguageUI({required this.langCode, required this.langName});
// }

// class SharedLanguage with ChangeNotifier {
//   LanguageUI SelectedLang = LanguageUI(langCode: "", langName: "");

//   void setSelectLanguage(String code, String name) {
//     SelectedLang = LanguageUI(langCode: code, langName: name);
//     notifyListeners();
//   }
// }

// class MyLanguageDialog extends StatefulWidget {
//   @override
//   MyLanguageDialog({super.key});

//   _MyLanguageDialogState createState() => _MyLanguageDialogState();
// }

// class _MyLanguageDialogState extends State<MyLanguageDialog> {
//   List<LanguageUI> myLanguages = [
//     LanguageUI(langCode: "Es", langName: "Español"),
//     LanguageUI(langCode: "En", langName: "English"),
//   ];
//   LanguageUI selectedLang = LanguageUI(langCode: "Es", langName: "Español");

//   @override
//   void initState() {
//     selectedLang = myLanguages[0];
//   }

//   void setSelectedLanguage(LanguageUI val) {
//     setState(() {
//       selectedLang = val;
//     });
//   }

//   List<Widget> createRadioListLanguages() {
//     List<Widget> widgets = [];

//     for (LanguageUI myLanguage in myLanguages) {
//       widgets.add(
//         RadioListTile(
//           value: myLanguage,
//           groupValue: selectedLang,
//           title: Text(myLanguage.langName),
//           subtitle: Text(myLanguage.langCode),
//           onChanged: (currentLanguage) {
//             print("Current User ${currentLanguage?.langName}");
//             setSelectedLanguage(myLanguage);
//           },
//           selected: selectedLang == myLanguage,
//           activeColor: Colors.green,
//         ),
//       );
//     }

//     return widgets;
//   }

//   @override
//   Widget build(BuildContext context) {
//     return AlertDialog(
//       title: const Text('Seleccionar Idioma'),
//       content: Column(children: createRadioListLanguages()),
//       actions: <Widget>[
//         TextButton(
//           onPressed: () {
//             Navigator.of(context).pop(); // Dismiss the dialog
//           },
//           child: const Text('Close'),
//         ),
//         TextButton(
//           onPressed: () {
//             Navigator.of(
//               context,
//             ).pop(true); // Return true to indicate confirmation
//           },
//           child: const Text('Confirm'),
//         ),
//       ],
//     );
//   }
// }

// Future<bool?> showMyLanguageDialog(BuildContext context) async {
//   // Async function to handle future
//   return showDialog<bool>(
//     context: context,
//     builder: (BuildContext context) {
//       return MyLanguageDialog();
//     },
//   );
// }
