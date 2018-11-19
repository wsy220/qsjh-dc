package com.qsjh.dc;

import io.dcloud.common.DHInterface.IWebview;
import io.dcloud.common.DHInterface.StandardFeature;
import io.dcloud.common.util.JSUtil;
import org.json.JSONArray;

import android.content.Intent;


public class QsPlugin extends StandardFeature {
    public void openActivityWithHtml5(IWebview pWebview, JSONArray array) {
        String CallBackID = array.optString(0);
        JSONArray newArray = new JSONArray();
        Intent intent=new Intent();
        for(int i=2;i<array.length();i++){
            intent.putExtra("extra"+i, array.optString(i));
        }
        try {
            Class clz = Class.forName(array.optString(1));
            intent.setClass(mApplicationContext, clz); //设置跳转的Activity
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            mApplicationContext.startActivity(intent);
            JSUtil.execCallback(pWebview, CallBackID, newArray, JSUtil.OK, false);
        }catch (ClassNotFoundException e) {
            e.printStackTrace();
            JSUtil.execCallback(pWebview, CallBackID, newArray, JSUtil.ERROR, false);
        }
    }

}
