<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Student extends Model
{
    protected $fillable = [
         'state'
    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function proyect()
    {
        return $this->hasOne('App\Proyect');
    }
}