package com.dhcc.tzbb;

/**
 * Created by dreamsleep on 2017/8/21.
 */

import com.brentvatne.react.ReactVideoPackage;
import com.dhcc.workbench.ReactNativeHelper.RNMainActivity;
import com.facebook.react.ReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;

import java.util.Arrays;
import java.util.List;

public class RNIndexActivity extends RNMainActivity {

    @Override
    protected List<ReactPackage> getPackages() {
        System.out.println("RNIndexActivity  getPackages");
        return Arrays.<ReactPackage>asList(
                new VectorIconsPackage(),
                new ReactVideoPackage(),
                new PickerPackage()
        );
    }
}

