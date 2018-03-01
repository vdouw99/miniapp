// pages/home/home.js

import { Home } from 'home-model.js';
var home = new Home();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        bannerArr: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this._loadData();
    },

    _loadData: function () {
        var id = 1;
        home.getBannerData(id, (res) => {
            console.log(res);
            this.setData({ 'bannerArr': res });
        });
        home.getThemeData((res) => {
            console.log(res);
            this.setData({ 'themeArr': res });
        });
        home.getProductsData((data) => {
            console.log(data);
            this.setData({ productsArr: data });
        })
    },

    // callBack: function (res) {
    //     console.log(res);
    // },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})