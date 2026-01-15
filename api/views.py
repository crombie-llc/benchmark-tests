users = User.objects.filter(id__in=user_ids).prefetch_related('posts')
    posts = []
    for user in users:
        posts.extend(user.posts.all())