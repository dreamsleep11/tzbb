package com.dhcc.tzbb;

import com.dhcc.workbench.ReactNativeHelper.RNMainApplication;
import com.dhcc.workbench.kernel.AttrGet;


/**
 * Created by dreamsleep on 2017/7/14.
 */

public class MainApplication extends RNMainApplication {
    @Override
    public void onCreate() {
        super.onCreate();
        AttrGet.setDebug(BuildConfig.DEBUG);
    }

}
