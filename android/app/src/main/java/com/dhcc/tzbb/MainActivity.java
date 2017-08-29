package com.dhcc.tzbb;


import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.dhcc.workbench.kernel.AttrGet;

public class MainActivity extends AppCompatActivity  {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        loadingMain();
    }

    @Override
    protected void onResume() {
        super.onResume();
        loadingMain();
    }
    private void loadingMain() {
        AttrGet.setContext(this);
        AttrGet.setDebug(BuildConfig.DEBUG);
        AttrGet.setDebug(BuildConfig.DEBUG);
        if (AttrGet.isDebug()) {
            setContentView(R.layout.activity_main_dev);
            Button button = (Button) findViewById(R.id.cbtn);
            final EditText port = (EditText) findViewById(R.id.port);
            final EditText ip = (EditText) findViewById(R.id.ip);
            final EditText bz = (EditText) findViewById(R.id.bz);
            final EditText mainFile = (EditText) findViewById(R.id.mainFile);
            button.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent(MainActivity.this, RNIndexActivity.class);
                    Bundle bundle = new Bundle();
                    bundle.putString("name", String.valueOf(bz.getText()));
                    bundle.putString("ip", String.valueOf(ip.getText()));
                    bundle.putString("port", String.valueOf(port.getText()));
                    bundle.putString("file", String.valueOf(mainFile.getText()));
                    intent.putExtras(bundle);
                    startActivity(intent);
                }
            });
        }else{
            setContentView(R.layout.activity_main);
        }
    }
}
