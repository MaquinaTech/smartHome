<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Group;


class Light extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'status', 'description', 'group_id', 'created_at', 'updated_at',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Get the group that owns the Light
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
