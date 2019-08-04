<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Teacher extends Model
{
    protected $fillable = [
        'state'
    ];
    public function user()
    {
        return $this->belongTo('App\User');
    }
    public function proyect()
    {
        return $this->hasMany('App\Proyect');
    }
}