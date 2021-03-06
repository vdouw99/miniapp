<?php
/**
 * Created by PhpStorm.
 * User: sf
 * Date: 2018/2/10
 * Time: 6:34
 */

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\service\Token as TokenService;
use app\api\model\User as UserModel;
use app\api\validate\AddressNew;
use app\lib\enum\ScopeEnum;
use app\lib\exception\ForbiddenException;
use app\lib\exception\SuccessMessage;
use app\lib\exception\TokenException;
use app\lib\exception\UserException;
use think\Controller;

class Address extends BaseController
{
    protected $beforeActionList = [
        //'first' => ['only' => 'second'],  //只有second这个方法，需要执行first方法
        'checkPrimaryScope' => ['only' => 'createOrUpdateAddress']
    ];

    //验证初始权限的作用域，前置方法
//    protected function checkPrimaryScope(){
//        TokenService::needExclusiveScope();
//    }
//    protected function checkPrimaryScope()
//    {
//        $scope = TokenService::getCurrentTokenVar('scope');
//        if ($scope) {
//            if ($scope >= ScopeEnum::User) {
//                return true;
//            } else {
//                throw new ForbiddenException();
//            }
//        } else {
//            throw new TokenException();
//        }
//    }

    //创建或更新地址
    public function createOrUpdateAddress()
    {
        $validate = new AddressNew();
        $validate->goCheck();
        $uid = TokenService::getCurrentUid();  //根据Token获取UID
        $user = UserModel::get($uid);
        if (!$user) {
            throw new UserException();
        }
        $dataArray = $validate->getDataByRule(input('post.'));
        $userAddress = $user->address;
        if (!$userAddress) {
            $user->address()->save($dataArray);  //新增，模型的关联
        } else {
            $user->address->save($dataArray);  //更新
        }
        //return $user;
        //return new SuccessMessage();  //状态码:200
        return json(new SuccessMessage(), 201);  //手动更改状态码
    }
}