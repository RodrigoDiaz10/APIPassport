<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Form extends Model
{
    protected $fillable = [
        'name_proyect', 'members','group_leader','link','topic','description_proyect','scope','tools','objetive','level','area','state'
    ];
    public function proyect()
    {
        return $this->hasOne('App\Proyect');
    }
}