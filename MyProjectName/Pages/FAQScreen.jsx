import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FAQScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs =  [
    {
      question: "What is the Lost and Found app?",
      answer: "The Lost and Found app helps you find and report lost items. You can also check for items that have been reported found."
    },
    {
      question: "How do I report a lost item?",
      answer: "To report a lost item, go to the 'Report Lost Item' section and fill out the form with the details of the item."
    },
    {
      question: "How can I check if someone has found my item?",
      answer: "You can check the 'Found Items' section to see if any reported items match the description of your lost item."
    },
    {
      question: "Can I contact the owner when I found my item in the app?",
      answer: "Yes, you can contact the owner through the contact details provided in the 'Found Items' report."
    },
    {
      question: "What should I do if I find an item?",
      answer: "If you find an item, report it in the 'Report Found Item' section with all the relevant details."
    },
    {
      question: "What if I accidentally report an item as lost or found?",
      answer: "If you accidentally report an item as lost or found, you can edit or delete the report by going to the 'My Reports' section in the app. If you need further assistance, please contact our support team through the 'Help' section."
    },
    {
      question: "How do I edit my profile information?",
      answer: "To edit your profile information, go to the 'Profile' section in the app and update your details."
    },
    {
      question: "Can I share my lost item report on social media?",
      answer: "Yes, you can share your lost item report on social media by using the share button available in the 'My Reports' section."
    },
    {
      question: "Is there a way to filter found items by location?",
      answer: "Yes, you can filter found items by location using the filter options available in the 'Found Items' section."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support by going to the 'Help' section in the app and selecting 'Contact Support'."
    },
    {
      question: "Is my data secure in the Lost and Found app?",
      answer: "Yes, your data is secure. We use industry-standard encryption to protect your information."
    },
  ];

  const handlePress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <TouchableOpacity style={styles.questionContainer} activeOpacity={0.7} onPress={() => handlePress(index)}>
              <Text style={styles.question}>{faq.question}</Text>
            </TouchableOpacity>
            {expandedIndex === index && <Text style={styles.answer}>{faq.answer}</Text>}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    marginTop: '7%',
    textAlign: 'center',
    color: '#2c3e50',
  },
  faqContainer: {
    marginBottom: '4%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: '2.5%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  questionContainer: {
    marginBottom: '1.25%',
    padding: '2.5%',
    borderRadius: 5,
    backgroundColor: '#ecf0f1',
  },
  question: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  answer: {
    fontSize: 15,
    color: '#555',
  },
});

export default FAQScreen;