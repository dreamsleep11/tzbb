Pod::Spec.new do |s|

s.name         = "ImageCropPicker"
s.version      = "0.12.3"
s.license      = "MIT"
s.platform = :ios, '8.0'
s.homepage     = "https://github.com/marcshilling/react-native-image-picker"
s.authors      = { 'Marc Shilling' => 'abc@126.com' }
s.summary      = "A React Native module that allows you to use the native UIImagePickerController UI to select a photo from the device library or directly from the camera"
s.source       = { :git => "" }
s.source_files  ="node_modules/react-native-image-crop-picker/ios/*.{h,m}", "node_modules/react-native-image-crop-picker/ios/UIImage-Resize/*.{h,m}", "node_modules/react-native-image-crop-picker/ios/RSKImageCropper/*.{h,m}"
s.vendored_frameworks = 'node_modules/react-native-image-crop-picker/ios/ImageCropPickerSDK/*.framework'
end
