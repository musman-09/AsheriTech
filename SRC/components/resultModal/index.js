import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { icons } from '../../assets';
import DMSansBold from '../DMSansBold';

const ResultModal = ({ visible, onClose }) => {
  console.log(visible, 'visible');
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image source={icons.success} style={styles.icon} />

          <DMSansBold style={styles.title} name={'Congratulation'} />
          <Text style={styles.message}>
            Your account has been successfully created.
          </Text>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1ABC60',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
