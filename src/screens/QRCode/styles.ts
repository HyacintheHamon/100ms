import {StyleSheet} from 'react-native';

import {COLORS} from '../../utils/theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  image: {
    height: 200,
    width: 346,
  },
  heading: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.25,
    textAlign: 'center',
    paddingTop: 24,
  },
  description: {
    color: COLORS.TEXT.MEDIUM_EMPHASIS,
    
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: 'center',
    paddingTop: 16,
  },
  joiningLinkInput: {
    backgroundColor: COLORS.SURFACE.LIGHT,
    borderColor: COLORS.BORDER.LIGHT,
    borderWidth: 1,
    width: '100%',
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 16,
    marginTop: 8,
    color: COLORS.TEXT.HIGH_EMPHASIS,
    
  },
  joiningLinkInputText: {
    color: COLORS.TEXT.HIGH_EMPHASIS,
    
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  joiningLinkInputView: {
    marginTop: 56,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: COLORS.PRIMARY.DEFAULT,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY.DEFAULT,
    marginTop: 16,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: COLORS.SECONDARY.DISABLED,
    borderColor: COLORS.SECONDARY.DISABLED,
  },
  joinButtonText: {
    
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: COLORS.TEXT.HIGH_EMPHASIS_ACCENT,
  },
  disabledText: {
    color: COLORS.TEXT.DISABLED_ACCENT,
  },
  horizontalSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.SECONDARY.DISABLED,
    marginVertical: 24,
  },
  scanQRButton: {
    backgroundColor: COLORS.PRIMARY.DEFAULT,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY.DEFAULT,
    borderRadius: 8,
  },
  scanQRButtonIcon: {
    color: COLORS.TEXT.HIGH_EMPHASIS_ACCENT,
    paddingRight: 12,
  },
  joiningFlowLeft: {
    width: 'auto',
    backgroundColor: COLORS.SURFACE.LIGHT,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER.LIGHT,
    paddingLeft: 16,
    paddingRight: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  joiningFlowRight: {
    width: 'auto',
    backgroundColor: COLORS.SURFACE.LIGHT,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.BORDER.LIGHT,
    paddingRight: 16,
    paddingLeft: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  joiningFlowContainer: {
    flexDirection: 'row',
  },
  selectedFlow: {
    backgroundColor: COLORS.PRIMARY.DEFAULT,
  },
});

export {styles};
